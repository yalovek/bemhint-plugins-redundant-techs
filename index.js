module.forEntityTech = function (tech, techsConfig, entity) {
    entity.addError({
        msg: 'Redundand tech',
        tech: tech.tech
    });
};
