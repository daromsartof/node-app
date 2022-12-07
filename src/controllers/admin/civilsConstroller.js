const { countDocuments } = require("../../models/userEntity");
const userEntity = require("../../models/userEntity");
const { path } = require("../../utils/constant");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const index = async (req, res) => {
    userEntity.findOne({}, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/civils/index', { title: 'civil', data: docs , path : path});
    });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateCivil = async (req, res) => {
    const data = req.body;
    console.log(data);
    if (!data) {
        res.status(401).json({
            message: "data not found"
        })
    }
    let profilsPath;
    let uploadPath;
    if (req.files && Object.keys(req.files).length > 0) {
        profilsPath = req.files.profilsPath;
        uploadPath = 'upload/' + profilsPath.name;
        profilsPath.mv(`public/${uploadPath}`, function (err) {
            if (err)
                return res.status(500).send(err);
        });
    }
    const social = typeof data["socialName[]"] != "string" ? data["socialName[]"].map((name, index) => {
        return {
            name: name,
            value: data["value[]"][index]
        }
    }) : [{
        name: data["socialName[]"],
        value: data["value[]"]
    }]
    const { modifiedCount } = await userEntity.updateOne({
        _id: data._id
    }, {
        civil: {
            biographie: data.biographie,
            city: data.city,
            degree: data.degree,
            firstName: data.firstName,
            name: data.name,
            phone: data.phone,
            profession: data.profession,
            social: social,
            profilsPath: uploadPath
        }
    });

    res.status(modifiedCount ? 200 : 500).json({
        message: modifiedCount ? "modified" : "error"
    });
}



module.exports = {
    index,
    updateCivil
}

