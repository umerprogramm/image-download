const GetInput = ()=>{
    let VideoId = document.getElementById('input').value
    
    download(VideoId)
  document.getElementById('input').value = ""
}
const download = (id)=>{
    let source = document.getElementById('video').src = `https://www.youtube.com/embed/${id}`
    
}




