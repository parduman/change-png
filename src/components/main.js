import React from 'react';
import '../styles/Main.css';
import mergeImages from 'merge-images';

class mainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mergeImage: "",
            file1: "",
            file2: "",
            file2x: 0,
            file2y: 0,
            file1x: 0,
            file1y: 0,
        }
    }

    handleChange(event, name) {
        if (event.target.files[0]) {
            this.setState({
                ...this.state,
                [name]: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    mergeImage(file1, file2) {
        mergeImages([
            { src: file1, x: this.state.file1x, y: this.state.file1y },
            { src: file2, x: this.state.file2x, y: this.state.file2y }
        ]).then(b64 => {
            this.setState({
                mergeImage: b64
            })
        });
    }

    positionchange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => {
            this.mergeImage(this.state.file1, this.state.file2)
        })
    }

    blurchange(e){
        let { value } = e.target;
        const canvas = document.createElement('canvas');
        canvas.height = 400;
        canvas.width = 400;
        let ctx = canvas.getContext('2d');
        ctx.filter = `blur(${value}px)`;
        let image = new Image();
        image.src = this.state.file1;
        image.onload=()=>{
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            this.setState({
                file1: canvas.toDataURL("image/png"),

            })
        }
    }

    render() {
        return (
            <div>
                <div class='mt-4'>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '35%' }}>
                            <div>
                                <label for="Imageinput" class={this.state.file2 ? "text-success" : "text-primary"}>Select Image</label>
                                <input id="Imageinput" class="invisible" type="file" onChange={(e) => { this.handleChange(e, 'file2') }} />
                            </div>
                            {this.state.file2 ? <div>
                                <div class="row mt-2">
                                    <div class="col-md-4">
                                        <label>X-Position</label>
                                        <input type='number' class="form-control" name='file2x' value={this.state.file2x} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label>y-Position</label>
                                        <input type='number' class="form-control" name='file2y' value={this.state.file2y} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                </div>
                            </div> : ""}
                        </div>
                        <div style={{ width: '35%' }}>
                            <div>
                                <label for="Imageinput2" class={this.state.file1 ? "btn text-success" : "btn text-primary"}>Select Background Image</label>
                                <input id="Imageinput2" class="invisible" type="file" onChange={(e) => { this.handleChange(e, 'file1') }} />
                            </div>
                            {this.state.file1 ? <div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>X-Position</label>
                                        <input type='number' class="form-control" name='file1x' value={this.state.file1x} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label>y-Position</label>
                                        <input type='number' class="form-control" name='file1y' value={this.state.file1y} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label>Blur Value</label>
                                        <input type='number' class="form-control" onChange={(e) => this.blurchange(e)} />
                                    </div>
                                </div>
                            </div>
                            : ""
                            }
                        </div>
                        <div style={{ width: '20%' }}>
                            <button type="button" class="btn btn-success" onClick={(e) => { this.mergeImage(this.state.file1, this.state.file2) }}>Display</button>
                        </div>
                    </div>
                </div>
                {this.state.mergeImage ? <div class="text-center">
                    <a href={this.state.mergeImage} download><img class="mt-3" style={{ height: '20vw', width: '20vw' }} id="123" alt="aa" src={this.state.mergeImage} ></img></a>
                </div> : ""}
            </div>
        );
    }

}

export default mainComponent;