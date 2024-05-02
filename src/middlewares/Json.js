export async function json(req, res){
    const buffers = []
    console.log("==> Chunk: ", req.chunk)
    for await(const chunk of req){
        buffers.push(chunk)
    }

    try{
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }catch {
        req.body = null
    }
}