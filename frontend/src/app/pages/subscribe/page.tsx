"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Component() {
    const router = useRouter(); 
    const [name, setName] = React.useState('');
    const [phonenumber, setPhonenumber] = React.useState('');
    const [state, setState] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSignUp = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/v1/subscriber/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, phonenumber, state, district }), 
            });

            if (response.ok) {
                router.push("/pages/home");
            } else {
                console.error("Sign up failed");
            }
        } catch (error) {
            console.error("Sign up failed:", error);
        } finally {
            setIsLoading(false);
            setName("");
            setPhonenumber("");
            setState("");
            setDistrict("");
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
                            <Label htmlFor="phonenumber">Phone Number</Label>
                            <Input id="phonenumber" placeholder="Enter your phone" type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
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
                    <Button onClick={handleSignUp} disabled={isLoading}>Subscribe</Button>
                </div>
            </div>
        </div>
    );
}
