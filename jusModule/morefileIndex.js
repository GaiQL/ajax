let stringsT = ["Hello", "98052", "101"];
let validatorsT = {};
validatorsT["ZIP code"] = new Validation.ZipCodeValidator();
validatorsT["Letters only"] = new Validation.LettersOnlyValidator();
for (let s of stringsT) {
    for (let name in validatorsT) {
        console.log(`"${s}" - ${validatorsT[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZWZpbGVJbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL25hbWVzcGFjZS9tb3JlZmlsZUluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQSxJQUFJLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFHekMsSUFBSSxXQUFXLEdBQWlELEVBQUUsQ0FBQztBQUNuRSxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1RCxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUdwRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUUsT0FBUSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFpQixJQUFLLElBQUssRUFBRSxDQUFDLENBQUM7SUFDOUcsQ0FBQztBQUNMLENBQUMifQ==