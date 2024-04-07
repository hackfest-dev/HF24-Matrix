"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
    const router = useRouter();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/v1/volunteer/volunteerer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstname, lastname, phonenumber, password, state, district }),
            });

            if (response.ok) {
                router.push("/pages/home");
                console.log("Volunteer registered successfully");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setIsLoading(false);
            // Clear form fields
            setFirstname('');
            setLastname('');
            setPhonenumber('');
            setPassword('');
            setState('');
            setDistrict('');
        }
    };

    return (
        <div className="w-full lg:p-20 pt-10 flex justify-center items-center">
            <div className="w-1/2  space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Become a Volunteer</h2>
                    <p className="text-gray-500 dark:text-gray-400">Enter your information to sign up as a volunteer.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Enter your first name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Enter your last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" placeholder="Enter your phone" type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="states">State</Label>
                        <Input id="states" placeholder="Enter your state" value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Input id="district" placeholder="Enter your location" value={district} onChange={(e) => setDistrict(e.target.value)} />
                    </div>
                    <Button type="submit" disabled={isLoading}>Sign up</Button>
                </form>
            </div>
        </div>
    );
}
