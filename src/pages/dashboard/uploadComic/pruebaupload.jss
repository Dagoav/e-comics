import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComic } from "../../../redux/actions";

import { useForm } from "react-hook-form";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Button from 'react-bootstrap/Button';
import "./UploadComic.css"
import axios from "axios";


const UploadComic = () => {
  const dispatch = useDispatch();
  const comic_info = useSelector((state) => state.comic_info);
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const regex_url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  const onSubmit = (e, values) => {
    // console.log(base64EncodedImage, "soy lo que envío" );
    // console.log(e, values, "soy29")
    setValidated(true);

    if (Object.entries(errors).length === 0) {
      dispatch(addComic(values))
    }

     e.preventDefault();
      if (!selectedFile) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        addComic(reader.result);
      }
  }

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
      setSelectedFile(file);
      setFileInputState(e.target.value);
          console.log(file, "soy 43")
    }
    const previewFile = (file) => {
      const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = (e) => {
      console.log('submiting')
      // e.preventDefault()
      // if(!previewSource) return;
      // addComic(previewSource);
      e.preventDefault();
      if (!selectedFile) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        addComic(reader.result);
      };
    }

    const addComic = async(base64EncodedImage) => {
        console.log(base64EncodedImage)
        try {
          await axios('http://localhost:3000/comics', {
            method: "POST",
            headers: {'content-type': 'application/json'}
          });
          setFileInputState('');
          setPreviewSource('');
          console.log("soy69")
        } catch (error) {
          console.error(error)
          
        }
    }


  return (
    <div className="mainAdm-users">
      <h2>Upload Comic</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* Name */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Comic Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Amazing Spiderman"
              autoComplete="off"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="errors">This field is required</span>}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Image */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Image</Form.Label>
            {/* <Form.Control
              required
              type="text"
              placeholder="https: ..."
              defaultValue={"https://kbimages1-a.akamaihd.net/fdc54578-b6e4-401a-a1c9-1116ca5541b3/1200/1200/False/marvel-comics-5.jpg"}
              autoComplete="off"
              {...register("image", { required: true, pattern: { value: regex_url, message: "URL Format is required" } })} */}
              
            <form >
            <input
              required
              id="fileInput"
              type="file"
              placeholder="https: ..."
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              
              />
              <button type="submit">Submit</button>
            </form>
              {previewSource && (
                            <img
                              src={previewSource}
                              alt="chosen"
                              style={{height: '100px'}}
                              />
                          )}
          {errors.image && <span className="errors">{errors.image.message || "This field is required"}</span>}
          < Form.Control.Feedback > Looks good!</Form.Control.Feedback>
          
            
          </Form.Group>

          {/*  Description */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              autoComplete="off"
              {...register("description")}
              rows={3} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          {/*  Episodes */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Episodes</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="No. episodes"
              autoComplete="off"
              {...register("episodes", { required: true, min: { value: 1, message: "Only integers" } })}
            />
            {errors.episodes && <span className="errors">{errors.episodes.message || "This field is required"}</span>}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/*  Released */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Released</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="26 Sep 2020"
              autoComplete="off"
              {...register("released", { required: true })}
            />
            {errors.released && <span className="errors">This field is required</span>}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/*  Publisher */}
          <Form.Group as={Col} md="4" className="my-2">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Publisher"
              autoComplete="off"
              {...register("publisher", { required: true })}
            />
            {errors.publisher && <span className="errors">This field is required</span>}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="d-flex justify-content-end">
          <Button className="mt-3" type="submit">Add comic</Button>
        </Row>
      </Form>
      {
        comic_info.info && <Alert className="alert-styles" key='success' variant='success'>{comic_info.info}</Alert>
      }
      {
        comic_info.error && <Alert className="alert-styles" key='danger' variant='danger'>{comic_info.error}</Alert>
      }

    </div >
  );
}

export default UploadComic;