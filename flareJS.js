(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "fljsv2",
                "name": "Flare.js",
                "color1": "#73595c",
                "blocks": [{
                    "opcode": "block_f510c7ff0a5f9771",
                    "text": "Alert [cded89d02ea01871]",
                    "blockType": "command",
                    "arguments": {
                        "cded89d02ea01871": {
                            "type": "string",
                            "defaultValue": "wow what the sigma???"
                        }
                    }
                }, {
                    "opcode": "block_c4fdf662a81dca10",
                    "text": "Developer Console Print [853ed030bb3ebc10]",
                    "blockType": "command",
                    "arguments": {
                        "853ed030bb3ebc10": {
                            "type": "string",
                            "defaultValue": "milk"
                        }
                    }
                }, {
                    "opcode": "block_3448f6dc96fcdbeb",
                    "text": "JavaScript [4fe0edb270d2adbb]",
                    "blockType": "command",
                    "arguments": {
                        "4fe0edb270d2adbb": {
                            "type": "string",
                            "defaultValue": "Js Code"
                        }
                    }
                }]
            }
        }
        async block_f510c7ff0a5f9771(args) {
            eval(String.prototype.concat(String("alert(\""), args["cded89d02ea01871"], String("\")")))
        }
        async block_c4fdf662a81dca10(args) {
            eval(String.prototype.concat(String("console.log(\""), args["853ed030bb3ebc10"], String("\")")))
        }
        async block_3448f6dc96fcdbeb(args) {
            eval(args["4fe0edb270d2adbb"])
        }
    }

    let extension = new Extension();

    Scratch.extensions.register(extension);
})(Scratch);