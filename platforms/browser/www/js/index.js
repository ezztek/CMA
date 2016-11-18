var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    deploymentKeyStaging: "12D1tZj4dVeLRbJbLG6rcUwl44fWV1CBBKNbG",

    deploymentKeyPROD: "vlE3MVQVVClt1islOiMBikuOAz-1V1CBBKNbG",

    // deviceready Event Handler => Bind any cordova events here. Common events are: 'pause', 'resume', etc.
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        codePush.sync();
        var msg = "Staging key: "+app.deploymentKeyStaging+", Prod: "+app.deploymentKeyPROD;
        document.getElementById("status").innerHTML=msg; 
        alert(msg);                        
        // new CodePush(app.deploymentKey, MainApplication.this, BuildConfig.DEBUG)
        // codePush.sync(null, { updateDialog: true, installMode: InstallMode.IMMEDIATE });
        // codePush.checkForUpdate(app.UpdateReady, app.UpdateError)
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    ,UpdateReady: function(update){
        if (update){ alert("An update is available"); }
        else{ alert("No updates available"); }        
    }
};

app.initialize();

document.getElementById('get-picture').addEventListener('click', getPicture, false);

function getPicture() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.FILE_URI
  });
}

function onSuccess(imageURI) {
  var image = document.getElementById('my-photo');
  image.src = imageURI;
}

function onFail(message) {
  alert('Failed because: ' + message);
}