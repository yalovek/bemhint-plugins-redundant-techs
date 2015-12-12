module.exports = {
    forEntityTech: function (tech, techsConfig, entity) {
        var error = {
            msg: 'Error of check fs entities',
            tech: tech.tech
        };

        entity.addError(error);
    }
};
