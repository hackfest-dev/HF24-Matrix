import streamlit as st
import pandas as pd
from geopy.geocoders import Photon
from geopy.distance import geodesic
import pydeck as pdk

df = pd.read_csv('dataset.csv')

geolocator = Photon(user_agent="measurements")

def find_nearest_bunkers(place_name, num_bunkers=5):
    try:
        location = geolocator.geocode(place_name)
        user_lat, user_lon = location.latitude, location.longitude

        df_clean = df.dropna(subset=['Latitude', 'Longitude'])

        df_clean.loc[:, 'Distance'] = df_clean.apply(lambda row: geodesic((user_lat, user_lon), (row['Latitude'], row['Longitude'])).kilometers, axis=1)

        df_sorted = df_clean.sort_values('Distance')

        nearest_bunkers = df_sorted.head(num_bunkers)

        return nearest_bunkers[['Bunker Name', 'Bunker Place', 'Latitude', 'Longitude', 'Distance']]
    except Exception as e:
        return f"Error: {str(e)}"

st.title('Nearest Bunkers Finder')

place_name = st.text_input('Enter a place name:', 'Mukka')

num_bunkers = st.number_input('Number of bunkers to find:', min_value=1, max_value=10, value=5)

if st.button('Find Nearest Bunkers'):
    nearest_bunkers = find_nearest_bunkers(place_name, num_bunkers)
    
    if isinstance(nearest_bunkers, str):
        st.error(nearest_bunkers)
    else:
        st.write('Nearest Bunkers:')
        st.dataframe(nearest_bunkers)

        user_location = geolocator.geocode(place_name)
        if user_location:
            map_center = [user_location.latitude, user_location.longitude]
        else:
            map_center = [0, 0]
        
       
        markers = pdk.Layer(
        "ScatterplotLayer",
        data=nearest_bunkers,
        get_position=["Longitude", "Latitude"],
        get_radius=200,  
        get_fill_color=[255, 0, 0],
        pickable=True,
        auto_highlight=True,
        get_icon="url",  
        icon_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"  # URL of Google Maps logo image
    )


        
        view_state = pdk.ViewState(
            longitude=map_center[1],
            latitude=map_center[0],
            zoom=10,
            pitch=0
        )

        
        r = pdk.Deck(
            layers=[markers],
            initial_view_state=view_state,
            map_provider="mapbox",
            api_keys={"mapbox": "AIzaSyD69p6gzMDgCygQzpk8LaBGyKM-_6znbDw"}
        )

        
        st.pydeck_chart(r)