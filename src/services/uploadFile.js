/**
 * @param {fileUpload.UploadedFile | fileUpload.UploadedFile[]} files
 */
const uploadFile = (files) => {
    let uploadPath = [];
    let error;
    if (files.length) {
        uploadPath = files.map((file) => {
            path = 'upload/' + file.name;
            file.mv(`public/${path}`, function (err) {
                if (err) return error = err;

            });
            return path;
        })
    } else {
        uploadPath = 'upload/' + files.name;
        files.mv(`public/${uploadPath}`, function (err) {
            if (err) return error = err;

        });
    }

    return {
        data : uploadPath,
        error
    }
}

module.exports = {
    uploadFile
}