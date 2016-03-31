module.exports = function(router,model,name,collectionName){

router.route('/'+ collectionName)

    // create a curricula (accessed at POST http://localhost:8080/curriculas)
    .post(function(req, res) {
        
        var item = new model(req.body);      // create a new instance of the Curricula model
        //curricula.name = req.body.name;  // set the curriculas name (comes from the request)

        item.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Curricula created!' });
        });

        
    })

    // get all the curriculas (accessed at GET http://localhost:8080/api/curriculas)
    .get(function(req, res) {
        model.find(function(err, items) {
            if (err)
                res.send(err);

            res.json(items);
        });
    });








// on routes that end in /collectionName/:' + name + '_id
// ----------------------------------------------------
router.route('/'+ collectionName +'/:' + name + '_id')

    // get the item with that id
    .get(function(req, res) {
        model.findById(req.params[name + '_id'], function(err, item) {
            if (err)
                res.send(err);
            res.json(item);
        });
    })

    // update the item with this id
    .put(function(req, res) {
        model.findByIdAndUpdate(req.params[name + '_id'], req.body, function(err, item) {

            if (err)
                res.send(err);
                //console.log(err)
                

            var item = new model(req.body);
        
            console.log(item)
            item.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'item updated!' });
            });

        });
    })

    // delete the item with this id
    .delete(function(req, res) {
        model.remove({
            _id: req.params[name + '_id']
        }, function(err, item) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// ----------------------------------------------------


router.route('/'+ collectionName +'/:' + name + '/meil')
    
    .get(function(req, res) {
        model.findOne({email:req.params[name]},function(err, item) {
            if (err)
                res.send(err);

            res.json(item);
        });
    });



};