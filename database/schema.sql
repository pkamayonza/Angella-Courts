CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    room_number VARCHAR(50) UNIQUE NOT NULL,
    room_type VARCHAR(50),
    price NUMERIC(10,2) NOT NULL,
    description TEXT,
    image_url TEXT,
    status VARCHAR(20) DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending',
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);