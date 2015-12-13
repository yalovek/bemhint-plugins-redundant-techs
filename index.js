module.exports = {
    forEntityTech: function (tech, techsConfig, entity) {
        var error = {
            msg: 'Redundand tech',
            tech: tech.tech
        };

        entity.addError(error);
    }
};
