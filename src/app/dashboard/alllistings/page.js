'use client'
import Image from "next/image";
import ProductIcon from "@/assets/images/detail-icon.svg"
import DeleteIcon from "@/assets/images/trash-bin.png"
import { useQuill } from 'react-quilljs';
import { useEffect } from "react";
import 'quill/dist/quill.snow.css';
import UploadIcon from "@/assets/images/upload.svg"
function Alllistings() {
    useEffect(() => {
        require("/src/assets/js/bootstrap.bundle.min.js");
      }, []);
      const { quill, quillRef } = useQuill();
    window.onload =()=>{
        var fileupload = document.getElementById("IconUpload");
        var imgFileUpload = document.getElementById("imgFileUpload");
        upload_icon.onclick = function () {
        fileupload.click();
        };

        IconUpload.addEventListener('change', function() {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
            imgFileUpload.src = e.target.result;
            }

            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = 'No image selected';
        }
        });
    }
  return (
    <>
        <section className="listings mt-4">
            <h2 className="table-heading">My Listings</h2>           
            <table className="table table-bordered justify-content-center">
                <thead>
                    <tr>
                        <th>Comany Logo</th>
                        <th>Company Name</th>
                        <th>Link</th>
                        <th>Has deal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image className="company-logo" src={ProductIcon} alt="" width={40} height={40} />
                        </td>
                        <td>MagicSpace SEO</td>
                        <td><a href="#" className="comapny-link">Click to open link</a></td>
                        <td>Yes</td>
                        <td className="actions">
                            <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#editlistModal">
                                <i className="las la-pencil-alt"></i>
                            </a>
                            <a href="#" className="text-danger mx-2" data-bs-toggle="modal" data-bs-target="#deletelistModal">
                                <i className="lar la-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image className="company-logo" src={ProductIcon} alt="" width={40} height={40} />
                        </td>
                        <td>MagicSpace SEO</td>
                        <td><a href="#" className="comapny-link">Click to open link</a></td>
                        <td>Yes</td>
                        <td className="actions">
                            <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#editlistModal">
                                <i className="las la-pencil-alt"></i>
                            </a>
                            <a href="#" className="text-danger mx-2" data-bs-toggle="modal" data-bs-target="#deletelistModal">
                                <i className="lar la-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image className="company-logo" src={ProductIcon} alt="" width={40} height={40} />
                        </td>
                        <td>MagicSpace SEO</td>
                        <td><a href="#" className="comapny-link">Click to open link</a></td>
                        <td>Yes</td>
                        <td className="actions">
                            <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#editlistModal">
                                <i className="las la-pencil-alt"></i>
                            </a>
                            <a href="#" className="text-danger mx-2" data-bs-toggle="modal" data-bs-target="#deletelistModal">
                                <i className="lar la-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image className="company-logo" src={ProductIcon} alt="" width={40} height={40} />
                        </td>
                        <td>MagicSpace SEO</td>
                        <td><a href="#" className="comapny-link">Click to open link</a></td>
                        <td>Yes</td>
                        <td className="actions">
                            <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#editlistModal">
                                <i className="las la-pencil-alt"></i>
                            </a>
                            <a href="#" className="text-danger mx-2" data-bs-toggle="modal" data-bs-target="#deletelistModal">
                                <i className="lar la-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div className="modal fade" id="editlistModal"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="editlistModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <section className="editcompany">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <form>
                                        <div className="mb-3 upload-icon" id="upload_icon">
                                            <Image id="imgFileUpload" src={UploadIcon} alt="" width={80} height={80} />
                                            <span>Upload Company Icon</span>
                                            <input type="file" id="IconUpload"   />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Company Name</label>
                                            <input type="text" className="form-control" placeholder='Enter Tool Name' />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Company Tag line</label>
                                            <input type="text" className="form-control" placeholder='Tag line Here' />
                                        </div>
                                        <div className="editor-parent mb-3">
                                            <label className="form-label">Short Description</label>
                                            <div ref={quillRef} />
                                        </div>
                                        <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                                            <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn w-sm btn-danger" id="delete_company">Update Company</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="deletelistModal" tabIndex={-1} aria-labelledby="deletelistModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="icon-modal">
                            <Image src={DeleteIcon} alt="" />
                        </div>
                        <h4 className="text-dark text-center mt-4">Are you sure?</h4>
                        <p className="text-muted mx-4 mb-0 text-center mt-1">Are you sure you want to remove this Company?</p>
                        <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                            <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn w-sm btn-danger" id="delete_company">Yes, Delete It!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Alllistings;