"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios';
import * as react from 'react';

export default function Component() {
    const handleSubscribe = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/subscriber/subscribe", { // Assuming the endpoint for subscription is /api/v1/subscribe
                name,
                phone,
                state,
                district
            });

            if (response.status === 200) {
                alert("Subscription successful!"); 
            } else {
                console.error("Subscription failed");
            }
        } catch (error) {
            console.error("Subscription failed:", error);
        }
    };

    
    return (
        <div className="w-full lg:p-40 pt-36  flex justify-center items-center">
            <div className="w-1/2 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Subscribe to Flood Alerts</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your information to receive flood alerts for your area.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Enter your phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="Enter your state" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="district">District</Label>
                            <Input id="district" placeholder="Enter your district" value={district} onChange={(e) => setDistrict(e.target.value)} />
                        </div>
                    </div>
                    <Button onClick={handleSubscribe}>Subscribe</Button>
                </div>
            </div>
        </div>
    )
}
