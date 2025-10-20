import api from "../api/axios";

export interface ExampleData {
  id: number;
  name: string;
  description: string;
}

export async function getExamples(): Promise<ExampleData[]> {
  const response = await api.get<ExampleData[]>("/examples");
  return response.data;
}

export async function getExampleById(id: number): Promise<ExampleData> {
  const response = await api.get<ExampleData>(`/examples/${id}`);
  return response.data;
}

export async function createExample(data: Omit<ExampleData, "id">): Promise<ExampleData> {
  const response = await api.post<ExampleData>("/examples", data);
  return response.data;
}

export async function updateExample(
  id: number,
  data: Partial<ExampleData>
): Promise<ExampleData> {
  const response = await api.put<ExampleData>(`/examples/${id}`, data);
  return response.data;
}

export async function deleteExample(id: number): Promise<void> {
  await api.delete(`/examples/${id}`);
}
