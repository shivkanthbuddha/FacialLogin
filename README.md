# FacialLogin
Ability to Register a face and recognize the face in future. All credits to https://thecodingtrain.com/ for the training and initial code base.Takes the mobileNet model and retrains with addtional images 

[Click for a DEMO](https://shivkanthbuddha.github.io/FacialLogin/)

# Features!

  - Ability to Register a Face
  - Ability to  recognize an earlier trained face
  - Download the model 
  - Ablity to original MobileNet and New Face 

> To build a  Facial recognition system 
> a new person comes registers himself
> post that the model should be able to 
> recognize him in any future date

### Tech

FacialLogin uses a number of open source projects to work properly:

* [Javascript] 
* [Node js ] 
* [tensorflow.js ] 
* [ml5] 

### Installation

FacialLogin requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -g superstatic
$ superstatic -p 8000
# Traverse to http://localhost:8000
```
### Happy Path

Want to contribute? Great!
- Traverse to http://localhost:8000 and make sure you are visible on the webcamera
- Provide the your name to register in the text box (label)
- Click on the "Add an Image" button for few times ( each click will take one photo)
- Click on "Register the face" ( it trains the model with all the images provides)
- The model should be able to recognize the face ( the label on the webcamera canvas)
- Click on the "Download model's delta" 
- Note is does not download the complete model but only the delta i.e. details of the new face 
 

### Todos

 - Seperate Register and Login into seperate pages 
 - Works only for one person now , extend to multiple persons


