import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import http from '../http';
import './UploadProject.css'

function UploadProject() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contentData, setContentData] = useState({ title: "", description: "", link: "", imageUrl: "" });
  const [projects, setProjects] = useState([]);
  const [update, setUpdate] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(8); // Number of projects per page

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  console.log(projects);

  const addContents = () => {
    setIsOpen(true);
  }


  const deleteRowData = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          http.delete(`delete-project/${_id}`)
            .then(() => {
              setUpdate(!update);
              setIsOpen(false);
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Success !',
                text: 'Project Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 1500
              })
            })
        }
      })
  }

  const editData = (_id) => {
    http.get(`projects/${_id}`)
      .then((res) => {
        setContentData(res.data.project);
        setIsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    const controller = new AbortController();
    setSpinner(true);
    http.get(`/projects?_cache=` + Date.now())
      .then((res) => {
        setProjects(res.data.projects);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, [update]);

  const customStyles = {
    content: {
      marginTop: '20px',
      marginBottom: '35px',
      top: '35%',
      left: '60%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: "90%",
      width: "52%",
      height: "300px",
      padding: "10px",
    },
  };

  // Media query for screens smaller than 768px (typical mobile devices)
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    customStyles.content.left = '50%';
    customStyles.content.right = 'auto';
    customStyles.content.transform = 'translate(-50%, -50%)';
    customStyles.content.maxHeight = "90%";
    customStyles.content.width = "95%";
    customStyles.content.height = "400px";
  }

  const handleChange = (e) => {
    setContentData({ ...contentData, [e.target.name]: e.target.value });
  }



  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first file from the selected files
    if (file) {
      setContentData({ ...contentData, imageUrl: file }); // Set the imageUrl to the file object
    } else {
      // Handle case where no file is selected, set imageUrl to empty string or null
      setContentData({ ...contentData, imageUrl: '' }); // or null depending on your backend requirements
    }
  }

  const submitData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', contentData.title);
    formData.append('description', contentData.description);
    formData.append('link', contentData.link);
    formData.append('adminOnly', contentData.adminOnly || true);
    // formData.append('imageUrl', contentData.imageUrl);

    // Check if imageUrl is not empty
    if (contentData.imageUrl) {
      formData.append('imageUrl', contentData.imageUrl);
    }

    if (contentData._id) {
      // http.put(`update-project/${contentData._id}`, contentData)
      http.put(`update-project/${contentData._id}`, formData)
        .then(() => {
          setUpdate(!update);
          setIsOpen(false);
          setContentData({ title: "", description: "", link: "", imageUrl: "" });
          // alert("Data Updated Successfully");
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Success !',
            text: 'Data Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err);
          // alert("Something went wrong!");
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
        })
    } else {

      http.post('save-project', formData)
        .then(() => {
          setUpdate(!update);
          setIsOpen(false);
          setContentData({ title: "", description: "", link: "", imageUrl: "" });
          // setContentData({ ...contentData, imageUrl: res.data.imageUrl });
          // alert("Data Added Successfully");
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Success !',
            text: 'Data Added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err);
          // alert("Something went wrong!");
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }

  const closeModal = () => {
    setIsOpen(false);
    setContentData({ title: "", description: "", link: "", imageUrl: "" });
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className='table-container page-content adjustment-type-table'>
      <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
        <h6>Project List</h6>
        <div>
          <button style={{ marginTop: "1px" }} onClick={addContents} className='btn btn-sm btn-primary float-end'>Add</button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {spinner ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : (
            currentProjects.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <button onClick={() => editData(item._id)} className="btn btn-sm action-btn">
                    <i className="fas fa-edit"></i>Edit
                  </button>
                  <button onClick={() => deleteRowData(item._id)} className="btn btn-sm action-btn">
                    <i className="fas fa-trash"></i>Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <button onClick={prevPage} className='page-link' disabled={currentPage === 1}>
              Previous
            </button>
          </li>

          {[...Array(Math.ceil(projects.length / projectsPerPage)).keys()].map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number + 1)} className='page-link'>
                {number + 1}
              </button>
            </li>
          ))}

          <li className='page-item'>
            <button onClick={nextPage} className='page-link' disabled={indexOfLastProject >= projects.length}>
              Next
            </button>
          </li>
        </ul>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="product_modal">
          <div className="page-content">
            <div className=" patients-head ">
              <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Content
                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fas fa-times"></i></span>
              </h5>
            </div>

            <div className=" p-3">
              {/* <form onSubmit={submitData}> */}
              <form onSubmit={submitData} encType="multipart/form-data">

                <input onChange={handleChange} name='title' value={contentData.title} type="text" className="form-control form-control-sm my-2" required placeholder="Title" />

                <input onChange={handleChange} name='description' value={contentData.description} type="text" className="form-control form-control-sm my-2" required placeholder="Description" />

                <input onChange={handleChange} name='link' value={contentData.link} type="text" className="form-control form-control-sm my-2" required placeholder="Link" />

                {/* <input onChange={handleChange} name='imageUrl' value={contentData.imageUrl} type="file" className="form-control form-control-sm my-2" required placeholder="ImageUrl" /> */}

                {/* <input onChange={handleImageUpload} type="file" className="form-control form-control-sm my-2" accept="image/*" required /> */}

                <input onChange={handleImageUpload} type="file" className="form-control form-control-sm my-2" accept="image/*" required />


                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save mb-1">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg> Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UploadProject;





