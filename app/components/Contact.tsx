import { Link } from "@remix-run/react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/components/ui/avatar"

function Contact() {
    return (
        <Link to='/chatroom/12' className="flex gap-2 p-2 hover:bg-primary hover:px-1 rounded-sm">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="grow">
                <p className="text-secondary">Name</p>
                <p className="text-sm text-secondary">active</p>
            </div>
        </Link>
    )
}

export default Contact
