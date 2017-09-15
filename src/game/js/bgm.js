/**
 * Created by casillas on 2016/10/16.
 */
function bgm($div){
    this.$div=$div;
    this.$audio=$("<audio src='Theme.m4a' id='bgm' controls='controls' autoplay='autoplay' loop='loop'></audio>");
    this.$div.append(this.$audio);
    this.$audio.css({
        'display':'none'
    })
}