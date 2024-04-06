package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type user struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

func main() {
	users := []user{
		{"jaideep@gmail.com", "12345678"},
	}
	fmt.Println(users)
	router := gin.Default()
	router.POST("/login", logTheUserIn())
	router.Run(":3050")
}

func logTheUserIn() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.String(http.StatusOK, "The user is logged in")
	}
}
