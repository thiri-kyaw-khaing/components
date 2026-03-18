const API = "http://localhost:8080/api/v1/admin/departments";

export async function getDepartments() {
  const res = await fetch(API, {
    next: { tags: ["departments"] },
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("Fetching departments from API:", API, res);
  if (!res.ok) {
    throw new Error("Failed to fetch departments");
  }

  return res.json();
}

export async function getDepartment(id: string) {
  const res = await fetch(`${API}/${id}`, {
    next: { tags: ["departments"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch department");
  }

  return res.json();
}
