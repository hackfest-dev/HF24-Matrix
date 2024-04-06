import streamlit as st
import pandas as pd
from geopy.geocoders import Photon
from geopy.distance import geodesic

# Load the dataset (replace 'dataset.csv' with your actual dataset file)
df = pd.read_csv('dataset.csv')

# Initialize the Photon geolocator
geolocator = Photon(user_agent="measurements")

# Function to find the nearest bunkers
def find_nearest_bunkers(place_name, num_bunkers=5):
    try:
        location = geolocator.geocode(place_name)
        user_lat, user_lon = location.latitude, location.longitude

        df_clean = df.dropna(subset=['Latitude', 'Longitude'])

        df_clean['Distance'] = df_clean.apply(lambda row: geodesic((user_lat, user_lon), (row['Latitude'], row['Longitude'])).kilometers, axis=1)

        df_sorted = df_clean.sort_values('Distance')

        nearest_bunkers = df_sorted.head(num_bunkers)

        return nearest_bunkers[['Bunker Name', 'Bunker Place', 'Latitude', 'Longitude', 'Distance']]
    except Exception as e:
        return f"Error: {str(e)}"

# Streamlit UI
st.title('Nearest Bunkers Finder')

# User input for place name
place_name = st.text_input('Enter a place name:', 'Mukka')

# User input for number of bunkers
num_bunkers = st.number_input('Number of bunkers to find:', min_value=1, max_value=10, value=5)

# Button to find nearest bunkers
if st.button('Find Nearest Bunkers'):
    # Call the function to find nearest bunkers
    nearest_bunkers = find_nearest_bunkers(place_name, num_bunkers)
    
    # Check if the function returned an error message
    if isinstance(nearest_bunkers, str):
        st.error(nearest_bunkers)
    else:
        # Display the nearest bunkers
        st.write('Nearest Bunkers:')
        st.dataframe(nearest_bunkers)

        # Display the map with bunker locations
        st.map(nearest_bunkers[['Latitude', 'Longitude']])
