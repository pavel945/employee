import axios from 'axios';
const baseUrl = 'http://localhost:3050';

export const createDepartment = (department) => {

    const url = `${baseUrl}/departments`;

    return axios.post(url, department);
}

export const getDepartments = () => {

    const url = `${baseUrl}/departments`;

    return axios.get(url);
}

export const getDepartment = (departmentId) => {

    const url = `${baseUrl}/departments/${departmentId}`;

    return axios.get(url);
}

export const updateDepartment = (department) => {

    const url = `${baseUrl}/departments/${department.id}`;

    return axios.put(url, department);
}

export const deleteDepartment = (departmentId) => {

    const url = `${baseUrl}/departments/${departmentId}`;

    return axios.delete(url);
}

export const createEmployee = (employee) => {

    const url = `${baseUrl}/employees`;

    return axios.post(url, employee);
}

export const getEmployees = () => {

    const url = `${baseUrl}/employees?_expand=department`;

    return axios.get(url);
}

export const getEmployee = (employeeId) => {

    const url = `${baseUrl}/employees/${employeeId}?_expand=department`;

    return axios.get(url);
}

export const updateEmployee = (employee) => {

    const url = `${baseUrl}/employees/${employee.id}`;

    return axios.put(url, employee);
}

export const deleteEmployee = (employeeId) => {

    const url = `${baseUrl}/employees/${employeeId}`;

    return axios.delete(url);
}