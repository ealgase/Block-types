
(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
    var descriptor = {
        blocks: [
            [' ', 'stack block: " "', 's1'],
            ['',  'stack block: ""', 's2'],
            ['w', 'stack block: "w"', 's3'],
            ['b', 'boolean block: "b"', 'b1'],
            ['r', 'reporter block: "r"', 'r1'],
            ['R', 'reporter block: "R"', 'r2'],
            ['rR', 'reporter block: "rR"', 'r3'],
            ['h', 'hat block: "h"', 'h1'],
            ['c', 'C block: "c"', 'c1'],
            ['cf', 'C cap block: "cf"', 'cf1'],
            ['e', 'E block: "e"', 'e1'],
            ['f', 'cap block: "c"', 'c1'],
            ['o', 'outline stack block: "o"', 'o1'],
            ['p', 'define hat  block: "p"', 'p1'],
            ['abcde', 'square block: anything else', 'abcde1'],
        ],
        menus: {
        }
    };
    ScratchExtensions.register('Block types', descriptor, ext);
})({});
