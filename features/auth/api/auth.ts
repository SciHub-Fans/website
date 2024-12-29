import request from "@/lib/request";


export const login = async (data: { signature: string; publicKey: string; payload: any }) => {
    const response = await request.post("/auth/login", data);
    return response.data;
}
