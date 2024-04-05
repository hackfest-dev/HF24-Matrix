import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
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
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Enter your phone" type="tel" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="Enter your state" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="district">District</Label>
                            <Input id="district" placeholder="Enter your district" />
                        </div>
                    </div>
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
    )
}

