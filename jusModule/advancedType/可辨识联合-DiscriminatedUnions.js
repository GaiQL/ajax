function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
}
function assertNever(x) {
    throw new Error('hi,it is broken' + x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5Y+v6L6o6K+G6IGU5ZCILURpc2NyaW1pbmF0ZWRVbmlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hZHZhbmNlZFR5cGUv5Y+v6L6o6K+G6IGU5ZCILURpc2NyaW1pbmF0ZWRVbmlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBLGNBQWMsQ0FBUTtJQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsS0FBSyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUksQ0FBQyxDQUFBLENBQUM7UUFDOUMsU0FBUyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDTCxDQUFDO0FBSUQscUJBQXFCLENBQU87SUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBRSxpQkFBaUIsR0FBRyxDQUFDLENBQUUsQ0FBQztBQUMzQyxDQUFDIn0=