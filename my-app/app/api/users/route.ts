import users from "../../data/users.json";

export async function GET() {
  return Response.json(users);
}