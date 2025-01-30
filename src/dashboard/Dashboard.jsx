import * as React from 'react';
import { useGetMany } from 'react-admin';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
    const { data, loading, error } = useGetMany('posts', []); // Récupère tous les posts

    // Calcul des statistiques 
    const totalPosts = data ? data.length : 0;
    const publishedPosts = data ? data.filter(post => post.published).length : 0;

    return (
        <div>
          <Card>
              <h1>Tableau de bord</h1>
                <CardContent>
                    <Typography variant="p">Nombre total de publications : {totalPosts}</Typography>
                </CardContent>
            </Card>
            {/* ... autres cartes pour d'autres statistiques */}
            <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Dashboard;