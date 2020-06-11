const pass = CryptoJS.AES.decrypt("U2FsdGVkX18HHJ+704zYVAKnprHt9MksNp5pIYqi72A6nMLFyQXjuHLh1iMxhUUkwwBQuN9kxmv9AuHKPYPUFZLsqre4IsG5C/v8AX3yoAM=", "#!#!");
const gate = pass.toString(CryptoJS.enc.Utf8);
let model, labelContainer, maxPredictions;

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#target_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#input_target").change(function() {
    readURL(this);
    document.getElementById('prob1').style.display = "none"
    document.getElementById('prob2').style.display = "none"
    init();
});

async function init() {
    const modelURL = gate + "model.json";
    const metadataURL = gate + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const img = document.getElementById("target_img")
    const prediction = await model.predict(img);
    let normal = prediction[0].probability.toFixed(3) * 100
    let pneumonia = prediction[1].probability.toFixed(3) * 100
    document.getElementById('prob1').style.display = "block"
    document.getElementById('prob2').style.display = "block"
    document.getElementById('prob1').innerHTML = "Normal Probability: <font color='yellow'>" + normal + "%</font>";
    document.getElementById('prob2').innerHTML = "Pneumonia Probability: <font color='red'>" + pneumonia + "%</font>";
}