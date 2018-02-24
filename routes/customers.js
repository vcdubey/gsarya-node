exports.list = function (req, res) {
    req.getConnection(function (err, connection) {

        connection.query('SELECT * FROM customer', function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            console.log(rows);
            res.render('customers', { page_title: "Students Record", data: rows });

        });

    });

};

exports.drawChart = function (req, res) {

};

exports.studentsList = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM student', function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            res.render('student_list',{data:rows } );
            
        });
    })
};

exports.add = function (req, res) {
    res.render('add_customer', { page_title: "Add " });
};

exports.insert_record = function (req, res) {
    res.render('student_registration', { page_title: "Student Registration Page" });
};

exports.save_record = function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection((err, connection) => {
        if (err) console.log(err)
        
        var data = {

            name: input.name,
            class: input.class,
            rollno: input.rollno,
            studentmobile: input.mob,
            email: input.email,
            dob: input.dob,
            fathername: input.father,
            mothername: input.mother,
            address: input.address,
            fatheroccupation: input.foccupation
            

        };

        var query = connection.query("INSERT INTO student set ? ", data, function (err, rows) {

            if (err)
                console.log("Error inserting : %s ", err);

                console.log(rows);
            res.redirect('/student_list');

        });
    })
};

exports.edit = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        connection.query('SELECT * FROM customer WHERE id = ?', [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.render('edit_customer', { page_title: "Edit", data: rows });

        });

    });
};

exports.edit_record = function (req, res) {
    console.log("hu");
    var id = req.params.ID;
    console.log("hu");

    req.getConnection(function (err, connection) {

        connection.query('SELECT * FROM student WHERE ID = ?', [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);
            console.log(rows);
            res.render('edit_student', { page_title: "Edit", data: rows });

        });

    });
};
/*Save the customer*/
exports.save = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {

        var data = {

            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone

        };

        var query = connection.query("INSERT INTO customer set ? ", data, function (err, rows) {

            if (err)
                console.log("Error inserting : %s ", err);

            res.redirect('/customers');

        });

        // console.log(query.sql); get raw query

    });
};/*Save edited customer*/
exports.save_edit = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var data = {

            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone

        };

        connection.query("UPDATE customer set ? WHERE id = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Updating : %s ", err);

            res.redirect('/customers');

        });

    });
};

exports.delete_customer = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        connection.query("DELETE FROM customer  WHERE id = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error deleting : %s ", err);

            res.redirect('/customers');

        });

    });
};