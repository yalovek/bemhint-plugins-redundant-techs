exports.forEachTech = function (tech, entity) {
    entity.addError({
        msg: 'Redundand tech',
        tech: tech.name
    });
};
