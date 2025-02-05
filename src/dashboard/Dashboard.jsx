import * as React from 'react';
import { useGetList } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  // Récupérer les données des posts
  const { data: posts, isLoading: postsLoading } = useGetList('posts');
  // Récupérer les données des utilisateurs
  const { data: users, isLoading: usersLoading } = useGetList('users');

  if (postsLoading || usersLoading) {
    return <div>Loading...</div>;
  }

  // Calculer le nombre de posts par utilisateur
  const postsPerUser = users.map(user => {
    const userPosts = posts.filter(post => post.userId === user.id);
    return {
      name: user.name,
      posts: userPosts.length,
    };
  });

  // Calculer la répartition des posts (published vs draft)
  const postStatusDistribution = [
    { name: 'Published', value: posts.filter(post => post.status === 'published').length },
    { name: 'Draft', value: posts.filter(post => post.status === 'draft').length },
  ];

  // Couleurs pour le graphique
  const COLORS = ['#0088FE', '#8884d8'];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Statistiques */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Nombre total d'utilisateurs</Typography>
              <Typography variant="p">{users.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Nombre total de posts</Typography>
              <Typography variant="p">{posts.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/*Nombre de posts par utilisateur */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Nombre de posts par utilisateurs
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={postsPerUser}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="posts" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Répartition des posts (published vs draft) */}
      <Typography variant="p" gutterBottom style={{ marginTop: '20px' }}>
        Répartition des posts
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={postStatusDistribution}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {postStatusDistribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;