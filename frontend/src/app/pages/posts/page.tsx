import { Button } from "../../components/button"

export default function Component() {
  return (
    <div className="bg-white text-black px-4 py-6 md:px-6 lg:py-12">
      <div className="grid gap-6 md:gap-8">
        <div className="space-y-9">
          <div className="space-y-2">
          <h2 className="text-lg font-bold">Create a new post</h2>
          <Button className="text-sm" variant="outline">
            Choose a category
          </Button>
        </div><Button variant="outline">
            New Post
          </Button>
          <div className="space-y-4 ">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold">johndoe</h3>
                  <h4 className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                    Ohio, 12th District
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">5 minutes ago</p>
            </div>
            <p className="text-base leading-loose md:text-lg">
              Just finished reading the new bestseller. Highly recommended!
            </p>
            <img
              alt="Post image"
              className="aspect-post overflow-hidden rounded-lg object-cover"
              height={300}
              src="/placeholder.svg"
              width={500}
            />
          </div>
          <hr className="border-gray-200 dark:border-gray-800" />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold">janedoe</h3>
                <h4 className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                  California, 7th District
                </h4>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
          </div>
          <p className="text-base leading-loose md:text-lg">
            Just finished reading the new bestseller. Highly recommended!
          </p>
          <img
            alt="Post image"
            className="aspect-post overflow-hidden rounded-lg object-cover"
            height={300}
            src="/placeholder.svg"
            width={500}
          />
          <hr className="border-gray-200 dark:border-gray-800" />
        </div>
      </div>
    </div>
  )
}

