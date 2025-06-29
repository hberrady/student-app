from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

students = []
student_id_counter = 1

@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/students', methods=['POST'])
def add_student():
    global student_id_counter
    data = request.json
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400
    student = {
        'id': student_id_counter,
        'name': data['name']
    }
    students.append(student)
    student_id_counter += 1
    return jsonify(student), 201

@app.route('/students/<int:id>', methods=['PUT'])
def edit_student(id):
    data = request.json
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400
    for student in students:
        if student['id'] == id:
            student['name'] = data['name']
            return jsonify(student)
    return jsonify({'error': 'Student not found'}), 404

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s['id'] != id]
    return jsonify({'message': 'Deleted'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

