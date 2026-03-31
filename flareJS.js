// i removed extforge
// check for da unsandboxed
(async function(Scratch) {
    if (!Scratch.extensions.unsandboxed) {
        alert("Since Flare.js uses, well JS, IT needs to be unsandboxed for it to work.")
        return
    }
// define the extension yk
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
                    // dev console
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
                    // run js
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

    Scratch.extensions.register(new Extension());
})(Scratch);