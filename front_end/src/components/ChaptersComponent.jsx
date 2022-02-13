import axios from 'axios';
import {React,useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import { useNavigate } from 'react-router';
import BaseUrl from '../BaseUrl';
import Swal from 'sweetalert2';
import { getChapters, deleteChapter } from '../user axios functions/Axios';


function ChaptersComponent() {
    const {course_id} = useParams()
    const [chapters, setChapters] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(()=>{
     getChapters(course_id).then((chapters) =>{
         chapters.map((chapter)=>{
             console.log(chapter.no);
         })
         setChapters(chapters)
     })

    },[update])

    let navigate = useNavigate();
    const AccessToken = JSON.parse(localStorage.getItem('authToken')).access
    
    const [newChapter, setNewChapter] = useState({
        'course': course_id,
        'no':'',
        'title': '',
        'description': '',
        'video': '',
    })
    const handleChange = ((e)=>{
        setNewChapter({
            ...newChapter,[e.target.name]:e.target.value
        })
        console.log(newChapter);
    })
    const handleFileChange = ((e)=>{
        setNewChapter({
            ...newChapter,[e.target.name]:e.target.files[0]
        })
    })
    const handleSubmit = ((e)=>{
        e.preventDefault();

        const form_Data = new FormData()

        form_Data.append('course',course_id)
        form_Data.append('no',newChapter.no)
        form_Data.append('title',newChapter.title)
        form_Data.append('description',newChapter.description)
        form_Data.append('video', newChapter.video);


        axios.post(BaseUrl+'chapter_list',
                    form_Data,
                    { headers: {"Authorization" : `Bearer ${AccessToken}`,'content-type' :'multipart/form-data'}}
                    ).then((response)=>{
                        console.log(response.data);
                        console.log("Chapter added successfully");
                        
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Chapter added successfully',
                                showConfirmButton: false,
                                timer: 1000
                                })
                                navigate('')
                            
                            })
                            setUpdate(!update)

                    })
        const handleDelete = (id) =>{
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                deleteChapter(id).then((res) =>{
                                    console.log(res);
                                    if (res.status==true){
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Chapter deleted successfully',
                                            showConfirmButton: false,
                                            timer: 1000
                                            })
                                            window.location.reload();
                                          
                                        

                                    }else{
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Something went wrong',
                                            showConfirmButton: false,
                                            timer: 1000
                                            })

                                    }
                                }).catch((error) => {
                                      console.log(error.response.data);
                                      console.log("---------------CATCH BLOCK");
                                      console.log(error.response)
                                      Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Something Went Wrong',
                                        showConfirmButton: false,
                                        timer: 1000
                                      })
                                        
                                })
                            }
                          });
                        }


  return <div>
              <div className="card">
                      <h3 className="card-header">Chapters <span className="float-end">Course Title</span> </h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Chapters</th>
                                    <th>Video</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    chapters.map((chapter) => {
                                        return (
                                            <tr key={chapter.no} className="text-center">
                                                <td>{chapter.no}</td>
                                                    <td>
                                                        
                                                        <p className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1">{chapter.title}</p>
                                                            {/* Video Modal */}
                                                                    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog modal-xl">
                                                                        <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                        <div className="ratio ratio-16x9">
                                                                                <iframe src="" title="YouTube video" allowFullScreen></iframe>
                                                                        </div>
                                                                        </div>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                            {/* End Video Modal */}
                                                    </td>
                                                    <td>{chapter.description}</td>
                                                    <td><p onClick={()=>{handleDelete(chapter.id)}} className='card btn btn-danger text-decoration-none text-dark'>Delete</p></td>
                                                
                                            </tr>
                                        )
                                    })
                                }
                                
                                
                                
                            </tbody>

                        </table>
                        <form onSubmit={handleSubmit}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Add More Chapters
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="card">
                                        
                                        <div className="card-body">
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Chapter No</label>
                                        <div className="col-sm-6">
                                        <input type="number" name="no" onChange={handleChange}  className="form-control-plaintext" id="staticEmail" placeholder="Eg: 3"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Chapter Title</label>
                                        <div className="col-sm-6">
                                        <input type="text" name="title" onChange={handleChange}  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-6">
                                        <textarea rows="6" name="description" onChange={handleChange} type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Video</label>
                                        <div className="col-sm-6">
                                        <input type="file"  id="video_file"  name="video" onChange={handleFileChange} className="form-control-plaintext"/>
                                        </div>
                                    </div>
                                    {/* accept="video/*" */}
                                    
                                
                                <button className="btn btn-dark float-end col-12">Submit</button>
                                    </div>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                        </div>
                    </form>
                      </div>
                  </div>
  </div>;
}

export default ChaptersComponent;
