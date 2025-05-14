import {API} from "@/shared/api";

export async function get_posts() {
    return await API.get("posts/all");
}