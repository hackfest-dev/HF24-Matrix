import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="w-full lg:p-20 pt-10 flex justify-center items-center">
            <div className="w-1/2  space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Become a Volunteer</h2>
                    <p className="text-gray-500 dark:text-gray-400">Enter your information to sign up as a volunteer.</p>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" placeholder="Enter your phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="states">State</Label>
                        <Input id="states" placeholder="Enter your state" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Input id="district" placeholder="Enter your location" />
                    </div>
                    <Button>Sign up</Button>
                </div>
            </div>
        </div>
    )
}

