import React, { useRef } from 'react'
import { Modal, Form, Button, FormGroup } from 'react-bootstrap'

export default function NewContactModal() {
    const idRef = useRef()
    const nameRef = useRef()
    
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </>
    )
}
