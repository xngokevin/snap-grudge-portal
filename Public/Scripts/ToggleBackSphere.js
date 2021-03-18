// @input SceneObject Camera
// @input float collideDistance = 30
// @input SceneObject CubeCollider
// @input SceneObject backSphere
// @input SceneObject doorOccluders
// @input SceneObject box
// @input SceneObject grudge
// @input Component.AudioComponent audio
// @input Component.AudioComponent grudgeAudio


self.audio.fadeInTime = 1;
self.audio.fadeOutTime = 2;
self.audio.volume = 1;
	

var objA = script.Camera.getTransform().getWorldPosition();
var objB = script.CubeCollider.getTransform().getWorldPosition();
var distance = Math.abs( objA.distance(objB));
if( distance <= script.collideDistance ) {
	script.box.enabled = false;
	script.backSphere.enabled = false;
    script.doorOccluders.enabled = false;
    script.grudge.enabled = true;

    if( self.audio.isPlaying) {
			
	}
	else {
		script.audio.stop(true);
	}
    

    var rotation = script.Camera.getComponent("Component.DeviceTracking").getTransform().getWorldRotation().y;
    if(rotation < .90) {
        script.grudgeAudio.play(1);
    }
    else {
//        script.grudgeAudio.stop(true);
    }
}
else
{
	script.backSphere.enabled = true;
	script.box.enabled = false;
//    script.grudge.enabled = false;

	if(self.audio.isPlaying) {
		script.audio.play(-1);
	}
	else {
			
	}
    
    if(script.grudgeAudio.isPlaying)
        script.grudgeAudio.play(-1)

}

//global.logToScreen(script.Camera.getComponent("Component.DeviceTracking").getTransform().getWorldRotation().y);
//
//var rotation = script.Camera.getComponent("Component.DeviceTracking").getTransform().getWorldRotation().y;
//
//if(rotation > .9) {
//    if(!script.grudgeAudio.isPlaying) {
//        script.grudgeAudio.play(-1)
//    }
//}
//
