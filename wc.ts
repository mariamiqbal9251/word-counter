import inquirer from "inquirer";

let paragraph= await inquirer.prompt(
    [
        {
            type:"input",
            name:"para",
            message: " Enter your Paragraph \n"

        }
    ]
);

const characterCount = paragraph.para.length;
console.log(" The total characters in your paragrapgh are \t" + characterCount);


const wordCount=paragraph.para.split(/\s+/).length
console.log("The number of words in you paragraph are \t" +wordCount);