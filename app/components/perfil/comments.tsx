import { Avatar, Button } from "@nextui-org/react"

const Comment = (props: {
  commentMessage: {
    user_id: string
    name: string
    avatar: string
    comment: string
  }
}) => {
  return <div className="flex flex-col gap-3">
    <div className="flex gap-3 px-5">
      <Avatar className="w-12 h-12" src={props.commentMessage.avatar} />
      <div>
        <h4 className="text-medium">{props.commentMessage.name}</h4>
        <p className="text-sm">
          {props.commentMessage.comment}
        </p>
        <div>
          <Button
            className="text-gray-500"
            variant="light"
          >like</Button>
          <Button
            className="text-gray-500"
            variant="light"
          >comment</Button>
          <span className="text-sm">10h </span>
        </div>
      </div>
    </div>
  </div>
}

export default Comment
