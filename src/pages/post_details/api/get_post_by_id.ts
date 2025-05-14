import type {UUIDv4} from "@/shared/models/uuid.ts";
import {API} from "@/shared/api";

export async function getPostById(id: UUIDv4) {
    return await API.get(`posts/${id}`)
}