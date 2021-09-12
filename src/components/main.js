import React from 'react';
import mergeImages from 'merge-images';

class mainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mergeImage: "",
            backgroundImage: "",
            overlayImage: "",
            overlayImagex: 0,
            overlayImagey: 0,
            backgroundImagex: 0,
            backgroundImagey: 0,
        }
    }

    uploadImage(event, name) {
        if (event.target.files[0]) {
            this.setState({
                [name]: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    mergeImage() {
        let { backgroundImage, overlayImage, backgroundImagex, backgroundImagey, overlayImagex, overlayImagey } = this.state;
        if(backgroundImage && overlayImage){
            mergeImages([
                { src: backgroundImage, x: backgroundImagex, y: backgroundImagey },
                { src: overlayImage, x: overlayImagex, y: overlayImagey }
            ]).then(b64 => {
                this.setState({
                    mergeImage: b64
                })
            });
        }
    }

    positionchange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => {
            this.mergeImage();
        })
    }

    blurchange(e) {
        let { value } = e.target;
        const canvas = document.createElement('canvas');
        canvas.height = 400;
        canvas.width = 400;
        let ctx = canvas.getContext('2d');
        ctx.filter = `blur(${value}px)`;
        let image = new Image();
        image.src = this.state.backgroundImage;
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            this.setState({
                backgroundImage: canvas.toDataURL("image/png"),
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1 class="display-1 my-2 mx-4">Image Editor</h1>
                </div>
                <div class='mt-4'>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '35%' }}>
                            <div>
                                <label for="Imageinput" class={this.state.overlayImage ? "text-success" : "text-primary"}>Select Image</label>
                                <input id="Imageinput" class="invisible" type="file" onChange={(e) => { this.uploadImage(e, 'overlayImage') }} />
                            </div>
                            {this.state.overlayImage ? <div>
                                <div class="row mt-2">
                                    <div class="col-md-4">
                                        <label>X-Position</label>
                                        <input type='number' class="form-control" name='overlayImagex' value={this.state.overlayImagex} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label>y-Position</label>
                                        <input type='number' class="form-control" name='overlayImagey' value={this.state.overlayImagey} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                </div>
                            </div> : ""}
                        </div>
                        <div style={{ width: '35%' }}>
                            <div>
                                <label for="Imageinput2" class={this.state.backgroundImage ? "btn text-success" : "btn text-primary"}>Select Background Image</label>
                                <input id="Imageinput2" class="invisible" type="file" onChange={(e) => { this.uploadImage(e, 'backgroundImage') }} />
                            </div>
                            {this.state.backgroundImage ? <div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>X-Position</label>
                                        <input type='number' class="form-control" name='backgroundImagex' value={this.state.backgroundImagex} onChange={(e) => this.positionchange(e)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label>y-Position</label>
                                        <input type='number' class="form-control" name='backgroundImagey' value={this.state.backgroundImagey} onChange={(e) => this.positionchange(e)} />
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
                            <button type="button" class="btn btn-success" onClick={(e) => { this.mergeImage() }}>Apply Changes</button>
                        </div>
                    </div>
                </div>
                {this.state.mergeImage ? <div class="text-center">
                    <a href={this.state.mergeImage} download><img class="mt-3" style={{ height: 400, width: 400 }} id="123" alt="aa" src={this.state.mergeImage}></img></a>
                </div> : ""}
            </div>
        );
    }

}

export default mainComponent;