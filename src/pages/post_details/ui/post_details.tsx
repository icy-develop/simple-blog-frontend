import {useEffect, useState} from "preact/hooks";
import type {Post} from "@/shared/models/post.ts";
import {getPostById} from "@/pages/post_details/api/get_post_by_id.ts";
import {useRoute} from "preact-iso";
import type {UUIDv4} from "@/shared/models/uuid.ts";
import './post_details.css'

export function PostDetails() {
    const [post, setPost] = useState<Post>({} as Post);
    const route = useRoute();
    useEffect(() => {
        getPostById(route.params.id as UUIDv4).then((post) => setPost(post))
    }, [])
    return (
        <main class={`post-details`}>
            <h1>{post.header}</h1>
            <p>{post.text?.repeat(20) ?? ''}</p>
            <p>{post.create_date?.toString() ?? ''}</p>
            <p>{post.edit_date?.toString() ?? ''}</p>
        </main>
    )
}