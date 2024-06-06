import '../index.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { fas } from '@fortawesome/free-solid-svg-icons'
// // import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'


export type PostProps = {
    username: string, 
    avatarUrl: string, 
    group: string, 
    timestamp: number, 
    thumbnailUrl: string, 
    description: string, 
    likes: number, 
    comments: number
}

const Post = ({username, avatarUrl, group, timestamp, thumbnailUrl, description, likes, comments}: PostProps) => {
    return ( 
        <div className="flex"> 
            <div className='flex flex-col px-4'>
                <img className="w-[48px] h-[48px] rounded-full" src={avatarUrl} /> 
            </div>
            <div>
                <div className="flex text-lg">
                    <p> {username} </p>
                    <p className="text-slate-400 font-light "> &#8205;  in {group}</p>
                </div>
                <div>
                    <p className="text-slate-400 text-md font-light pb-4 "> {timestamp} min ago </p>
                    <img className='w-[458px] h-[458px] rounded pb-4' src={thumbnailUrl} />
                    <p className='text-2xl font-light pb-2'> {description} </p> 
                    <p className='font-semibold'> {likes} likes {comments} comments </p> 
                </div>
            </div>

        </div>
    )
}

export default Post; 
