const imageupload = (file, folder = "users") => {
    let file_name_string = file.name;
    var file_name_array = file_name_string.split(".");
    var file_ext = file_name_array[1];
    var letters = "ABCDE1234567890FGHJK1234567890MNPQRSTUXY";
    var result = "";
    while (result.length < 28) {
        var rand_int = Math.floor(Math.random() * 19 + 1);
        var rand_chr = letters[rand_int];
        if (result.substr(-1, 1) != rand_chr) result += rand_chr;
    }
    var resultExt = `${result}.${file_ext}`;
    file.mv(`public/Images/${folder}/${result}.${file_ext}`, function (err) {
        if (err) {
            throw err;
        }
    });
    return resultExt;
}



const checkValidation = async (v) => {
    try {
        const matched = await v.check();
        if (!matched) {
            let errorResponse = Object.values(v.errors || {})
                .map(error => error.message)
            return errorResponse.join(",")
        }
    } catch (error) {
        console.log(error, "validator error")
        return "validator error"
    }

}


module.exports = { imageupload, checkValidation }










// if (req.files !== null && req.files.image != undefined) {
//     var imagesArr = Array.isArray(req.files.image)
//         ? req.files.image
//         : [req.files.image]
//     var newImagesArr = [];
//     for (let i in imagesArr) {
//         var image = imageupload(imagesArr[1], "userImage")
//         newImagesArr.push(image)
//     }
//     req.body.image = newImagesArr;

// }



