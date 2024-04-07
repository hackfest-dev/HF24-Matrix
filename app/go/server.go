package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/twilio/twilio-go"
	twilioApi "github.com/twilio/twilio-go/rest/api/v2010"
)


type Coordinates struct{
	Latitude float32 `json:"latitude"`
	Longitude float32 `json:"longitude"`
}

func main() {
	router := gin.Default()
	router.POST("/needHelp", sendSMStoVolunteer())
	router.Run(":3050")
}

func sendSMStoVolunteer() gin.HandlerFunc {
	return func(c *gin.Context) {
        // Get phone number from request (you can validate it using a validator)
		var location Coordinates
		if err := c.ShouldBindJSON(&location);err!=nil{
            c.String(http.StatusBadRequest, "Bad request")
			fmt.Print(err)
            return
        }
		fmt.Print(location)

		err := godotenv.Load()
    	if err != nil {
        	fmt.Println("Error loading .env file")
    	}

		accountSid := os.Getenv("TWILIO_ACCOUNT_SID")
   		authToken := os.Getenv("TWILIO_AUTH_TOKEN")
		client := twilio.NewRestClientWithParams(twilio.ClientParams{
			Username: accountSid,
			Password: authToken,
		})
		message := fmt.Sprintf("DISASTER ALERT!! There's a user that might need your help!!! Here is the location of the user : https://www.google.com/maps/search/?api=1&query=%f,%f",location.Latitude, location.Longitude)
        // Send SMS

		recipients := []string{"+1234567890", "+919480933652","+917204064603","+916361236798","+919632371214"}
		params := &twilioApi.CreateMessageParams{}

        for _, recipient := range recipients {
			params.SetTo(recipient)
			params.SetFrom("+12513062316")
			params.SetBody(message)

			resp, err := client.Api.CreateMessage(params)
			if err != nil {
				fmt.Println("Error sending SMS message: " + err.Error())
			} else {
				response, _ := json.Marshal(*resp)
				fmt.Println("Response: " + string(response))
			}
		}

        c.JSON(200, gin.H{"message": "SMS sent successfully"})
}}
